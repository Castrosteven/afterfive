import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface PaymentCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonHref: string;
  isPopular?: boolean;
}

export function PaymentCard({
  title,
  description,
  price,
  features,
  buttonText,
  buttonHref,
  isPopular = false,
}: PaymentCardProps) {
  return (
    <Card
      className={`bg-secondary-background border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all ${
        isPopular ? "ring-2 ring-main" : ""
      }`}
    >
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">{title}</CardTitle>
        <p className="text-foreground/60">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold mb-4 text-main">{price}</div>
        <div className="space-y-4 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-main">✓</span>
              <span className="text-foreground">{feature}</span>
            </div>
          ))}
        </div>
        <Link href={buttonHref} className="block">
          <Button className="w-full bg-main text-main-foreground hover:bg-main/90 border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            {buttonText}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

interface PaymentCardsProps {
  location?: "landing" | "results";
}

export function PaymentCards({ location = "landing" }: PaymentCardsProps) {
  const singleEventFeatures = [
    "One-time event access",
    "Personalized matching",
    "NYC venue selection",
  ];

  const weeklyPassFeatures = [
    "4 events per month",
    "Priority matching",
    "Premium NYC venues",
    "First drink on us when signed up!",
  ];

  const getButtonHref = (type: "single" | "subscription") => {
    if (location === "landing") {
      return "/questionnaire";
    }
    return `/checkout?type=${type}`;
  };

  return (
    <div
      className={`grid grid-cols-1 ${
        location === "landing" ? "md:grid-cols-2" : ""
      } gap-8`}
    >
      <PaymentCard
        title="Single Event"
        description="Perfect for trying out"
        price="$9.99"
        features={singleEventFeatures}
        buttonText={location === "landing" ? "Get Started" : "Join This Event"}
        buttonHref={getButtonHref("single")}
      />
      <PaymentCard
        title="Weekly Pass"
        description="For regular socializers"
        price="$19.99"
        features={weeklyPassFeatures}
        buttonText={location === "landing" ? "Get Started" : "Join This Event"}
        buttonHref={getButtonHref("subscription")}
        isPopular
      />
    </div>
  );
}
