import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselSpacing() {
    const stats = [
        { id: 1, name: '', value: 'Thank you Natenrock! Certainly we can see the effect of your business guidance and your marketing training. It is evident in our growth. Kudos on the great job of consulting for our business. From us at Treebees catering and confectionery' }
        // { id: 2, name: '', value: 'September 2024' },
        // { id: 3, name: '', value: 'November 2024' },
    ]

    return (
        <Carousel className="w-full w-lg">
            <CarouselContent className="-ml-1">
                {Array.from({ length: 3 }).map((_,index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">

                                    <p>hello</p>
                                    
                                 
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
