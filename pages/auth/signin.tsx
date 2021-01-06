import React from 'react';
import {
  providers,
  signIn,
  csrfToken,
  SessionProvider,
} from 'next-auth/client';
import SignInCreds from './credentials-signin';

export default function SignIn({
  providers,
  csrfToken,
}: {
  providers: Array<SessionProvider>;
  csrfToken: string;
}) {
  return (
    <>
      {Object.values(providers).map((provider) =>
        provider.name === 'Credentials' ? (
          <SignInCreds csrfToken={csrfToken} />
        ) : (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ),
      )}
    </>
  );
}

SignIn.getInitialProps = async (context) => {
  return {
    providers: await providers(
      //@ts-ignore
      context,
    ),
    csrfToken: await csrfToken(context),
  };
};
