export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-secondary-background p-4 rounded-lg border-2 border-border">
              <div className="w-full h-40 bg-secondary-background/50 animate-pulse rounded mb-4" />
              <div className="space-y-2">
                <div className="w-3/4 h-4 bg-secondary-background/50 animate-pulse rounded" />
                <div className="w-1/2 h-4 bg-secondary-background/50 animate-pulse rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 