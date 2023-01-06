import React from 'react';
import { Group } from '@mantine/core';
import { Copyright } from 'tabler-icons-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer
      className="mt-4 w-full sm:mt-16"
      style={{ borderTop: '0.5px solid rgb(156 163 175)' }}
    >
      <Group align="start" position="center" py={24}>
        <div className="flex items-center">
          <Copyright size={12} strokeWidth={2} color={'black'} />
          <a
            className="ml-0.5 cursor-pointer text-sm text-black no-underline"
            href="https://www.startiasoft.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Startiasoft Corporation
          </a>
        </div>
        <div className="flex items-center justify-between">
          <a
            href="https://www.wantedly.com/companies/company_1786736"
            className="mr-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/wantedlyIcon.png"
              width={16}
              height={16}
              layout="fixed"
              alt="WantedlyIcon"
            />
          </a>
          <a
            href="https://www.green-japan.com/company/9093?job_offer_id=188625"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/GreenIcon.png"
              width={16}
              height={16}
              layout="fixed"
              alt="GreenIcon"
            />
          </a>
        </div>
      </Group>
    </footer>
  );
};

export default Footer;
