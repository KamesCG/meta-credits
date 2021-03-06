/* --- Global --- */
import { useEffect, useState } from "react";
import { useListVals } from "react-firebase-hooks/database";

/* --- Local --- */
import { database } from "@settings/firebase";

/* --- Component --- */
const VideoList = props => {
  /* --- Database : State --- */
  const [values, loading, error] = useListVals(
    database.ref("proposals").limitToFirst(10)
  );

  /* --- Component : State --- */
  const [errorMessage, setErrorMessage] = useState();

  /* --- Component : Effects --- */
  useEffect(() => {
    setErrorMessage(error);
  }, [error]);

  return loading ? (
    <LoadingMessage error={errorMessage} />
  ) : (
    <Atom.Flex sx={{ flexWrap: "wrap" }}>
      {values.reverse().map(video => (
        <GuildItem
          {...video}
          sx={{ m: [0, 0, "1.5%"], width: ["100%", "100%", "30%"] }}
        />
      ))}
    </Atom.Flex>
  );
};

const GuildItem = props => {
  return (
    <Atom.Flex card alignCenter between sx={{ width: "100%" }}>
      <Atom.Box>
        <Atom.Heading>Contact Information</Atom.Heading>
        <Atom.Heading>{props.name}</Atom.Heading>
        <Atom.Span>{props.email}</Atom.Span>
      </Atom.Box>
      <Atom.Box>
        <Atom.Heading>dApp Information</Atom.Heading>
        <Atom.Heading>{props.dappname}</Atom.Heading>
        <Atom.Span>{props.url}</Atom.Span>
      </Atom.Box>
      <Atom.Box>
        <Atom.Heading>Vote</Atom.Heading>
        <Atom.Button>Upvote</Atom.Button>
        <Atom.Button>Downvote</Atom.Button>
      </Atom.Box>
    </Atom.Flex>
  );
};

const LoadingMessage = props => {
  return (
    <>
      <Atom.Heading as="h5" sm>
        Loading Proposals...
      </Atom.Heading>
      <Atom.Span>{props.errorMessage}</Atom.Span>
    </>
  );
};

export default VideoList;
