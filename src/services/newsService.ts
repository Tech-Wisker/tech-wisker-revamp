
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

// In a real application, you should not expose API keys in the frontend
// Consider using a backend service or environment variables
const NEWS_API_KEY = 'pub_75765c3194c751e6aefa5d27ee6831f005481';
const NEWS_API_URL = 'https://newsdata.io/api/1/news';

export const fetchTechNews = async (): Promise<NewsArticle[]> => {
  try {
    const response = await fetch(
      `${NEWS_API_URL}?apikey=${NEWS_API_KEY}&language=en&category=technology&q=IT`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }
    
    const data: NewsResponse = await response.json();
    
    if (data.status !== 'success') {
      throw new Error('API returned error status');
    }
    
    return data.results;
  } catch (error) {
    console.error('Error fetching tech news:', error);
    return [];
  }
};

// Convert API articles to our blog post format
export const convertNewsToBlogPosts = (articles: NewsArticle[]) => {
  return articles.map(article => ({
    title: article.title,
    excerpt: article.description || 'No description available',
    image: article.image_url || 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: new Date(article.pubDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    category: article.category[0] || 'Technology',
    author: article.creator?.[0] || article.source_name || 'Unknown',
    link: article.link,
    tags: article.keywords || ['Technology'],
    source: {
      name: article.source_name,
      url: article.source_url,
      icon: article.source_icon
    }
  }));
};
