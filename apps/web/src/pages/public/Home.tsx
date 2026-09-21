import { CtaSection } from '@/pages/public/home/CtaSection'
import { FeaturesSection } from '@/pages/public/home/FeaturesSection'
import { HeroSection } from '@/pages/public/home/HeroSection'
import { SecuritySection } from '@/pages/public/home/SecuritySection'
import { StepsSection } from '@/pages/public/home/StepsSection'
import { TestimonialsSection } from '@/pages/public/home/TestimonialsSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StepsSection />
      <FeaturesSection />
      <SecuritySection />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
