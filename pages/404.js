import styled from '@emotion/styled';
import tw from '@tailwindcssinjs/macro';
import Link from 'next/link';

const Custom404Page = styled.div`
  ${tw`h-screen w-screen bg-white flex justify-center content-center flex-wrap`} {
  }
`;

const ErrorText = styled.span`
  ${tw`font-sans text-white`};
  font-size: 220px;
`;

const ToHome = styled.div`
  ${tw`absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl`};
  span {
    ${tw`opacity-50`}
  }
  a {
    ${tw`border-b hover:text-gray-300`}
  }
`;
export default function Custom404() {
  return (
    <Custom404Page>
      <ErrorText>404</ErrorText>
      <ToHome>
        <span>Take me back to {` `}</span>
        <Link href="/">Home</Link>
      </ToHome>
    </Custom404Page>
  );
}
