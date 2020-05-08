import styled from '@emotion/styled';
import tw from '@tailwindcssinjs/macro';

export const CardContainer = styled.div`
  ${tw`flex flex-wrap justify-center px-5 md:px-0`}
`;

const SCard = styled.div`
  ${tw`sm:mx-2 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 my-10 md:mx-5 bg-white max-w-sm rounded overflow-hidden shadow-lg`}
  .full {
    ${tw`h-full`}
  }
  .wfull {
    ${tw`h-48 px-2`}
  }
  .innerContainer {
    ${tw`py-2 px-2`}
  }
`;

const AmountSection = styled.div`
  ${tw`flex items-center`}
`;
const Amount = styled.h4`
  ${tw`inline-block text-gray-700 font-medium text-lg`}
`;
const Badge = styled.span`
  ${tw`inline-block m-auto ml-2 bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide`}
`;
const BaseDate = styled.div`
  ${tw`flex items-baseline`}
  .date {
    ${tw`text-gray-600 text-sm`}
  }
`;
const Description = styled.span`
  ${tw`text-gray-700 text-base`}
`;
const Branding = styled.span`
  ${tw`inline-block mb-2 ml-2 bg-gray-300 text-gray-800 text-xs p-1 px-2 rounded-full uppercase font-semibold tracking-wide`}
`;

const Card = () => (
  <SCard>
    <div className="full">
      <div className="wfull" />
      <div className="innerContainer">
        <AmountSection>
          <Amount>$10,00</Amount>
          <Badge>Future</Badge>
        </AmountSection>
        <BaseDate>
          <div className="date">10/10/2020</div>
        </BaseDate>
        <Description>Item Description goes here</Description>
      </div>
      <Branding>BRAND</Branding>
    </div>
  </SCard>
);

export default Card;
