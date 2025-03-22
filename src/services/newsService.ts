
interface NewsArticle {
  article_id: string;
  title: string;
  link: string;
  keywords: string[] | null;
  creator: string[] | null;
  video_url: string | null;
  description: string;
  content: string;
  pubDate: string;
  image_url: string;
  source_id: string;
  source_priority: number;
  source_name: string;
  source_url: string;
  source_icon: string;
  language: string;
  country: string[];
  category: string[];
}

interface NewsResponse {
  status: string;
  totalResults: number;
  results: NewsArticle[];
}

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author: string;
  link: string;
  tags?: string[];
  source?: {
    name: string;
    url: string;
    icon?: string;
  };
}

// In a real production app, this would be an environment variable
// Consider using a backend proxy to hide API keys
const NEWS_API_KEY = 'pub_75765c3194c751e6aefa5d27ee6831f005481';
const NEWS_API_URL = 'https://newsdata.io/api/1/news';

// Enhanced with retry logic and cache validation
export const fetchTechNews = async (q='IT'): Promise<NewsArticle[]> => {
  // Check for cached data first
  const cachedData = localStorage.getItem('cachedNewsArticles-'+q);
  if (cachedData) {
    try {
      const { timestamp, data } = JSON.parse(cachedData);
      // Use cache if less than 30 minutes old
      if (Date.now() - timestamp < 1800000) {
        console.log('Using cached news data');
        return data;
      }
    } catch (error) {
      console.error('Error parsing cached data:', error);
      // Continue to fetch fresh data if cache is invalid
    }
  }
  
  // Implement retry logic
  const maxRetries = 3;
  let retries = 0;
  let lastError: Error | null = null;
  
  while (retries < maxRetries) {
    try {
      const response = await fetch(
        `${NEWS_API_URL}?apikey=${NEWS_API_KEY}&language=en&category=technology&q=${q}`
      );
      
      if (!response.ok) {
        throw new Error(`Failed to fetch news: ${response.status} ${response.statusText}`);
      }
      
      const data: NewsResponse = await response.json();
      
      if (data.status !== 'success') {
        throw new Error('API returned error status: ' + data.status);
      }
      
      // Cache the successful response
      localStorage.setItem('cachedNewsArticles-'+q, JSON.stringify({
        timestamp: Date.now(),
        data: data.results
      }));
      
      return data.results;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      console.error(`Fetch attempt ${retries + 1} failed:`, lastError);
      retries++;
      
      // Wait before retrying (exponential backoff)
      if (retries < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, retries)));
      }
    }
  }
  
  console.error('All fetch attempts failed:', lastError);
  
  // Try to return cached data even if it's older
  if (cachedData) {
    try {
      const { data } = JSON.parse(cachedData);
      return data;
    } catch (e) {
      // If all else fails, return empty array
      return [];
    }
  }
  
  return [];
};

// Convert API articles to our blog post format with improved image fallbacks
export const convertNewsToBlogPosts = (articles: NewsArticle[]): BlogPost[] => {
  return articles.map(article => {
    // Generate better fallback images based on category
    const getFallbackImage = (category: string) => {
      const categoryMap: Record<string, string> = {
        'technology': 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'science': 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'business': 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'health': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'entertainment': 'https://images.unsplash.com/photo-1603190287605-e6ade32fa852?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'sports': 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'general': 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      };
      
      return categoryMap[category.toLowerCase()] || categoryMap['technology'];
    };
    
    // Format date properly with fallback
    const formatDate = (dateString: string) => {
      try {
        return new Date(dateString).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      } catch (e) {
        return new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      }
    };
    
    // Clean and limit excerpt length
    const cleanExcerpt = (text: string) => {
      // Remove HTML tags
      const cleanText = text.replace(/<\/?[^>]+(>|$)/g, "");
      // Limit to reasonable length
      return cleanText.length > 180 ? cleanText.substring(0, 180) + '...' : cleanText || 'No description available';
    };
    
    // Determine the most appropriate category
    const getCategory = () => {
      if (!article.category || article.category.length === 0) {
        return 'Technology';
      }
      
      // Priority categories to show first
      const priorityCategories = ['AI', 'Development', 'Web', 'Cybersecurity', 'Cloud'];
      const foundPriority = article.category.find(cat => 
        priorityCategories.some(priority => 
          cat.toLowerCase().includes(priority.toLowerCase())
        )
      );
      
      return foundPriority || article.category[0];
    };
    
    return {
      title: article.title,
      excerpt: cleanExcerpt(article.description || ''),
      image: article.image_url || getFallbackImage(article.category[0] || 'technology'),
      date: formatDate(article.pubDate),
      category: getCategory(),
      author: article.creator?.[0] || article.source_name || 'TechWisker Staff',
      link: article.link,
      tags: article.keywords || ['Technology'],
      source: {
        name: article.source_name,
        url: article.source_url,
        icon: article.source_icon
      }
    };
  });
};
