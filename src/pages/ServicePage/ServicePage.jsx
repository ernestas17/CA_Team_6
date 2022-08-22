// Hooks
import { useParams } from "react-router-dom";

// Data

import { contentData } from "../../data/servicePageData";

// Data

// Components
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

// Styles
import {
  ContentWrapper,
  ServiceHeadline,
  StyledWrapper,
} from "./ServicePage.style";

const ServicePage = () => {
  const { service } = useParams();

  const match = contentData.find((data) => data.path === service);

  return (
    <main>
      <StyledWrapper>
        <ServiceHeadline>{match.serviceName}</ServiceHeadline>
        <ContentWrapper>
          <Sidebar />
          <Content content={match} />
        </ContentWrapper>
      </StyledWrapper>
    </main>
  );
};

export default ServicePage;
