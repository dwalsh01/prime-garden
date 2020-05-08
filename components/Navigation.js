import { useState } from 'react';
import styled from '@emotion/styled';
import tw from '@tailwindcssinjs/macro';
import Link from 'next/link';

export const Navigation = () => {
  const [open, setOpen] = useState(true);
  return (
    <NavOuter>
      <NavInner>
        <NavFlex>
          <div className="branding">
            <Link href="/">
              <Brand>Prime Garden</Brand>
            </Link>
            <ToggleButton onClick={() => setOpen((prev) => !prev)}>
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  {open ? (
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
              </svg>
            </ToggleButton>
          </div>
          <NavBar open={open}>
            <Link href="/portfolio">
              <NavLink>Portfolio</NavLink>
            </Link>
            <Link href="/about">
              <NavLink>About</NavLink>
            </Link>
            <Link href="/contact">
              <NavLink>Contact</NavLink>
            </Link>
          </NavBar>
        </NavFlex>
      </NavInner>
    </NavOuter>
  );
};

const NavOuter = styled.div`
  ${tw`w-full text-gray-100 bg-white`}
`;

const NavInner = styled.div`
  ${tw`w-full`}
`;
const NavFlex = styled.div`
  ${tw`flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8`}
  .branding {
    ${tw`p-4 flex flex-row items-center justify-between`}
  }
`;

const ToggleButton = styled.button`
  ${tw`md:hidden rounded-lg focus:outline-none focus:shadow-outline`}
`;
const Brand = styled.a`
  ${tw`text-xl font-extrabold tracking-widest text-gray-900 uppercase rounded-lg hover:cursor-pointer focus:outline-none focus:shadow-outline`}
`;

const NavBar = styled.nav`
  ${(props) => (props.open ? tw`flex` : tw`hidden`)}
  ${tw`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}
`;

const NavLink = styled.a`
  ${tw`px-4 py-2 mt-2 mx-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-300 hover:cursor-pointer focus:bg-gray-200 focus:outline-none focus:shadow-outline`}
`;
