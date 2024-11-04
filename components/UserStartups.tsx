import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY_BY_USER } from "@/sanity/lib/queries";
import StartupCard, { StartupTypeCard } from "./StartupCard";

const UserStartups = async ({ id }: { id: string }) => {
  const startups = await client.fetch(STARTUP_QUERY_BY_USER, { id });

  return (
    <>
      {startups.length > 0 ? (
        startups.map((startup: StartupTypeCard) => (
          <StartupCard key={startup._id} post={startup} />
        ))
      ) : (
        <p className="no-result">No posts yet.</p>
      )}
    </>
  );
};

export default UserStartups;
