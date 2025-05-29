import { Nunito } from 'next/font/google';

import './globals.css'

import ToastProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';
// Components
import Navbar from './components/navbar';
import ClientOnly from './components/ClientOnly';
// Modals
import RegisterModal from './components/Modals/RegisterModal';
import LoginModal from './components/Modals/LoginModal';
import RentModal from './components/Modals/RentModal';
import SearchModal from './components/Modals/SearchModal';

export const metadata = {
  title: 'Airbnb | Home',
  description: 'Airbnb clone',
  icon: {
    url: "/favicon.png",
    type: "image/png",
  },
  shortcut: { url: "/favicon.png", type: "image/png" },
}

const font = Nunito({
  subsets: ["latin"]
})

export default async function RootLayout({ children, }: { children: React.ReactNode }) {

  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToastProvider />
          <RegisterModal />
          <LoginModal />
          <RentModal />
          <SearchModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className='pb-20 pt-28'>
          {children}
        </div>
      </body>
    </html>
  )
}