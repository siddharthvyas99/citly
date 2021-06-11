import React, { useState, useEffect } from "react";
import { isNil, isEmpty, either } from "ramda";

import Container from "components/Container";
import ListLinks from "components/Links/ListLinks";
import CreateLink from "components/Links/CreateLink";
import PageLoader from "components/PageLoader";
import linksApi from "apis/links";

const Dashboard = ({ history }) => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputurl, setInputUrl] = useState("");

  const fetchLinks = async () => {
    try {
      const response = await linksApi.list();
      setLinks(response.data.links);
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  const createLink = async () => {
    try {
      await linksApi.create({ link: { original_url: link } });
      Toastr.success("URL shortened successfully!!");
      setLink("");
      fetchLinks();
    } catch (error) {
      logger.error(error);
    }
  };

  const handlePin = async (slug, pinned) => {
    try {
      await linksApi.update(slug);
      Toastr.success(`Link ${pinned ? "unpinned !!" : "pinned to top"}`);
      fetchLinks();
    } catch (error) {
      logger.error(error);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <Container>
      <CreateLink
        inputurl={inputurl}
        loading={loading}
        setInputUrl={setInputUrl}
        createLink={createLink}
      />
      {!either(isNil, isEmpty)(links) ? (
        <Container>
          <ListLinks data={links} handlePin={handlePin} />
        </Container>
      ) : (
        <h1 className="text-xl leading-5 text-center">
          No links have shortened yet!!
        </h1>
      )}
    </Container>
  );
};

export default Dashboard;
