import { Loading as LoadingSpinner } from "@/components/loading";
export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <LoadingSpinner className="flex-1" />
    </div>
  );
} 