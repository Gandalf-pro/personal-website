import type { NextPage } from "next";
import ProjectDetailPageWrapper from "~/components/ProjectDetailPageWrapper";

const DiscordBot: NextPage = () => {
  return (
    <ProjectDetailPageWrapper slug="discord-bot">
      This was a fun project that i did. So that my me and my friends can
      control the discord music bot while we are playing games.
      <br />
      <br />
      I used Dialogflow from google to handle intent detection and used another
      hot word detector(hey google, hey siri etc...).
      <br />
      <br />
      Way that this worked was you can still control the music from chat box by
      using commands like /play, /pause, /skip etc... But you could also enter
      &quot;/sd&quot; short for speech detection to enter speech detection mode
      and use all the commands like /play by saying &quot;play Cartoon&quot;.
    </ProjectDetailPageWrapper>
  );
};

export default DiscordBot;
