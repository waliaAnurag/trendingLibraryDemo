export const metadata = {
  title: 'Next.js Demo',
  description: 'App Router and page router covered',
}
//we dont have head tag here because all the content being set into head is being given into metaData which will apply these meta data to all the page being covered by this rootLayout
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

