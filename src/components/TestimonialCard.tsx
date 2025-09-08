import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  rating: number
  profileIcon: string
  dataAiHint?: string
  timestamp: string
  story: string
}

export function TestimonialCard({ name, rating, profileIcon, dataAiHint, timestamp, story }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col p-6 bg-card shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <CardContent className="p-0 flex flex-col flex-grow">
        <div className="flex items-center gap-4 mb-4">
          <Avatar>
            <AvatarImage src={profileIcon} alt={name} data-ai-hint={dataAiHint} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold font-headline text-foreground">{name}</p>
            <p className="text-xs text-muted-foreground">{timestamp}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
        <p className="text-sm text-muted-foreground flex-grow">&quot;{story}&quot;</p>
      </CardContent>
    </Card>
  )
}
