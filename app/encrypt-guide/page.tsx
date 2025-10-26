import EncryptOverview from '@/components/EncryptOverview'
import EncryptionImplementation from '@/components/EncryptionImplementation'
import SecurityConsiderations from '@/components/SecurityConsiderations'
import CodeExamples from '@/components/CodeExamples'
import IntegrationGuide from '@/components/IntegrationGuide'
import Footer from '@/components/Footer'

export default function EncryptGuidePage() {
  return (
    <>
      <EncryptOverview />
      <EncryptionImplementation />
      <SecurityConsiderations />
      <CodeExamples />
      <IntegrationGuide />
      <Footer />
    </>
  )
}
