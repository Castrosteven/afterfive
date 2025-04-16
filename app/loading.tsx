import { Loading as LoadingSpinner } from "@/components/loading";
import { Header } from "@/components/header";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <LoadingSpinner className="flex-1" />
    </div>
  );
} 