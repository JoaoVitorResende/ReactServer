import UserNewForm from "./components/new-user-form";
import UserInfo from "./components/user-info";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UsersList from "./components/users-list";

const queryClient = new QueryClient();

export default function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <UserInfo />
        <hr />
        <UserNewForm />
        <hr />
        <UsersList/>
      </QueryClientProvider>
  )
}
