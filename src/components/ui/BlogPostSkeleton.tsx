
import { Skeleton } from './skeleton';

interface BlogPostSkeletonProps {
  featured?: boolean;
}

const BlogPostSkeleton = ({ featured = false }: BlogPostSkeletonProps) => {
  if (featured) {
    return (
      <div className="tech-card overflow-hidden animate-pulse">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Skeleton className="h-64 lg:h-80 rounded-lg" />
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-4 w-24 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-5/6" />
            <Skeleton className="h-6 w-4/6" />
            <div className="flex justify-between items-center pt-4">
              <Skeleton className="h-4 w-24" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-6 w-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="tech-card h-full flex flex-col animate-pulse">
      <Skeleton className="h-48 w-full rounded-lg mb-4" />
      <div className="space-y-3 flex-grow">
        <div className="flex justify-between items-center">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
      <div className="flex justify-between items-center pt-4 mt-auto">
        <Skeleton className="h-3 w-16" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
    </div>
  );
};

export default BlogPostSkeleton;
