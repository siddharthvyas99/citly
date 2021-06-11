import React from "react";
import LinkForm from "components/Links/Form/LinkForm";

const CreateLink = ({ inputurl, loading, setInputUrl, createLink }) => {
  return (
    <LinkForm
      inputurl={inputurl}
      loading={loading}
      setInputUrl={setInputUrl}
      createLink={createLink}
    />
  );
};

export default CreateLink;
