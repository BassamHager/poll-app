// components
import Section from "../section";
import CreatePollSectionHeader from "./createPollSectionHeader/index";
import CreatePollSectionBody from "./createPollSectionBody";
import CreatePollSectionFooter from "./createPollSectionFooter";

export default function CreatePollSection() {
  return (
    <Section
      header={<CreatePollSectionHeader />}
      body={<CreatePollSectionBody />}
      footer={<CreatePollSectionFooter />}
    />
  );
}
