import ComponentsOverview from '@/components/ComponentsOverview'
import WebappComponent from '@/components/WebappComponent'
import CoreComponent from '@/components/CoreComponent'
import BrowserComponent from '@/components/BrowserComponent'
import Footer from '@/components/Footer'

export default function ComponentsPage() {
  return (
    <>
      <ComponentsOverview />
      <WebappComponent />
      <CoreComponent />
      <BrowserComponent />
      <Footer />
    </>
  )
}
