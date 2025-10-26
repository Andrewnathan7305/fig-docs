import ArchitectureOverview from '@/components/ArchitectureOverview'
import CoreComponents from '@/components/CoreComponents'
import DataFlow from '@/components/DataFlow'
import SecurityArchitecture from '@/components/SecurityArchitecture'
import PerformanceSpecs from '@/components/PerformanceSpecs'
import Footer from '@/components/Footer'

export default function ArchitecturePage() {
  return (
    <>
      <ArchitectureOverview />
      <CoreComponents />
      <DataFlow />
      <SecurityArchitecture />
      <PerformanceSpecs />
      <Footer />
    </>
  )
}
