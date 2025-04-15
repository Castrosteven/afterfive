import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";

interface DrinkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DrinkModal({ isOpen, onClose }: DrinkModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-overlay flex items-center justify-center p-4 z-50">
      <Card className="bg-secondary-background border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full max-w-md">
        <CardHeader className="relative">
          <Button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-main/10 rounded-full"
            variant="default"
          >
            <X className="w-4 h-4" />
          </Button>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🍹</span>
            <div>
              <CardTitle className="text-2xl text-main">First Drink on Us!</CardTitle>
              <p className="text-sm text-foreground/60">Limited time offer</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground/80">
            Sign up today and get your first drink free at any of our partner venues!
          </p>
          <div className="space-y-2">
            <p className="text-sm font-medium">How it works:</p>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li className="flex items-center gap-2">
                <span className="text-main">✓</span>
                <span>Sign up for an account</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-main">✓</span>
                <span>Join your first event</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-main">✓</span>
                <span>Show your QR code to the bartender</span>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 pt-4">
            <Button className="flex-1 bg-main text-main-foreground hover:bg-main/90 border-2 border-border transition-colors">
              Sign Up Now
            </Button>
            <Button
              onClick={onClose}
              className="flex-1 bg-secondary-background text-foreground hover:bg-foreground hover:text-secondary-background border-2 border-border transition-colors"
            >
              Maybe Later
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 