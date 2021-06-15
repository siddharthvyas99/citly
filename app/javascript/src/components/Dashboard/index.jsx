import React, { useState, useEffect } from "react";
import { isNil, isEmpty, either } from "ramda";

import Container from "components/Container";
import ListLinks from "components/Links/ListLinks";
import CreateLink from "components/Links/CreateLink";
import PageLoader from "components/PageLoader";
import Toastr from "components/Common/Toastr";

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
      const resp = await linksApi.create({ link: { original_url: inputurl } });
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

  const handleClick = async slug => {
    try {
      const response = await linksApi.show(slug);
      window.open(response.data.link.original_url);
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
        <ListLinks
          data={links}
          handlePin={handlePin}
          handleClick={handleClick}
        />
      ) : (
        <h1 className="text-xl leading-5 text-center">
          No links have been shortened yet!!
        </h1>
      )}
    </Container>
  );
};

export default Dashboard;
