import Head from 'next/head'

interface AppHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

const AppHead = ({ 
  title = "Same Day Ramps - Wheelchair Ramp Rentals & Installation",
  description = "Professional wheelchair ramp rentals and installation services. Quick setup, flexible rental periods, and ADA-compliant solutions for your accessibility needs.",
  canonicalUrl = "https://yourdomain.com"
}: AppHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Same Day Ramps" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      
      {/* Preconnect to important third-party domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
    </Head>
  )
}

export default AppHead 