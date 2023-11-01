import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Portal from './pages/Portal';
import Chat from './pages/Chat';

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn
} from "@clerk/clerk-react";

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  const navigate = useNavigate()

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route path='/' element={
          <>
            <SignedIn>
              <Home />
            </SignedIn>
            <SignedOut>
              <Portal />
            </SignedOut>
          </>
        } />
        <Route path='/chat' element={
          <>
            <SignedIn>
              <Chat />
            </SignedIn>
            <SignedOut>
              <Portal />
            </SignedOut>
          </>
        } />
      </Routes>
    </ClerkProvider>
  )
}

export default App