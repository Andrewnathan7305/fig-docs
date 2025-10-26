import InstallationOverview from '@/components/InstallationOverview'
import MitmproxySetup from '@/components/MitmproxySetup'
import FirefoxConfig from '@/components/FirefoxConfig'
import ServiceSetup from '@/components/ServiceSetup'
import Troubleshooting from '@/components/Troubleshooting'
import Footer from '@/components/Footer'

export default function InstallationPage() {
  return (
    <>
      <InstallationOverview />
      <MitmproxySetup />
      <FirefoxConfig />
      <ServiceSetup />
      <Troubleshooting />
      <Footer />
    </>
  )
}
