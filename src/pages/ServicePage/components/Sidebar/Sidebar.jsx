// Data

import { sidebarData } from "../../../../data/servicePageData";
// Components
import Card from "../../../../components/Card/Card";

// Styles
import {
  StyledFeature,
  StyledFeatureBody,
  StyledFeatureBodyContainer,
  StyledFeatureCircle,
  StyledFeatureContainer,
  StyledFeatureTitle,
  StyledServicesContainer,
  StyledSidebar,
  StyledTitle,
} from "./Sidebar.style";

const Sidebar = () => {
  // Data
  const { service, features } = sidebarData;

  return (
    <StyledSidebar>
      <StyledServicesContainer>
        <StyledTitle>{service.title}</StyledTitle>
        {service.services.map((data, index) => (
          <Card key={index} icon={data.icon} text={data.text} path={data.to} />
        ))}
      </StyledServicesContainer>
      <StyledFeatureContainer>
        {features.map((data, index) => (
          <StyledFeature key={index}>
            <StyledFeatureCircle icon={data.icon} />
            <StyledFeatureBodyContainer>
              <StyledFeatureTitle>{data.title}</StyledFeatureTitle>
              <StyledFeatureBody>{data.text}</StyledFeatureBody>
            </StyledFeatureBodyContainer>
          </StyledFeature>
        ))}
      </StyledFeatureContainer>
    </StyledSidebar>
  );
};

export default Sidebar;
