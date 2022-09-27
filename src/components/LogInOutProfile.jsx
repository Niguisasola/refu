import LoginButton from "../components/LogInButton";
import LogoutButton from "../components/LogOutButton";
import Profile from "../components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function LogInOutProfile() {
  const { isLoading, error } = useAuth0();

  return (
    <main className="column">
      <h1>Iniciar Sesión</h1>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <LogoutButton />
          <Profile />
        </>
      )}
    </main>
  );
}

export default LogInOutProfile;