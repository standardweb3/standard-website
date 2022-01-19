import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useViewportContext } from 'Components/NewPageComponents/useViewport';

import mtrgl from 'assets/images/new/mtr.png';
import ltrgl from 'assets/images/new/ltr.png';
import stndgl from 'assets/images/new/stnd.png';

function Roadmap(props) {
  const viewport = useViewportContext();

  return (
    <div className={`${props.className} roadmap stndcontainer`}>
      <header>
        <motion.h1 drag={viewport === 'desktopsm' || viewport === 'desktop'}>
          Our Journey
        </motion.h1>
      </header>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{
            borderRadius: '12px',
          }}
          contentArrowStyle={{ borderRight: '7px solid  #F365BD' }}
          iconStyle={{
            background: '#000',
            borderColor: '#000',
            color: '#fff',
          }}
          icon={
            <motion.img
              drag={viewport === 'desktopsm' || viewport === 'desktop'}
              src={mtrgl}
            />
          }
        >
          <motion.h3
            drag={viewport === 'desktopsm' || viewport === 'desktop'}
            className="vertical-timeline-element-title"
          >
            2021 Q1
          </motion.h3>
          <motion.p drag={viewport === 'desktopsm' || viewport === 'desktop'}>
            - Oracle Module
            <br />- Web3 Grant
          </motion.p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{
            borderRadius: '12px',
          }}
          contentArrowStyle={{ borderRight: '7px solid  #F365BD' }}
          iconStyle={{
            background: '#000',
            borderColor: '#000',
            color: '#fff',
          }}
          icon={
            <motion.img
              drag={viewport === 'desktopsm' || viewport === 'desktop'}
              src={ltrgl}
            />
          }
        >
          <motion.h3
            drag={viewport === 'desktopsm' || viewport === 'desktop'}
            className="vertical-timeline-element-title"
          >
            2021 Q2
          </motion.h3>
          <motion.p drag={viewport === 'desktopsm' || viewport === 'desktop'}>
            - Release of STND, the governance token (ERC-20)
            <br />
            - IDO on Polkastarter
            <br />
            - Listing on KuCoin, Gate.io, Coinone, Uniswap
            <br />- Staking campaign
          </motion.p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{
            borderRadius: '12px',
          }}
          contentArrowStyle={{ borderRight: '7px solid  #F365BD' }}
          iconStyle={{
            background: '#000',
            borderColor: '#000',
            color: '#fff',
          }}
          icon={
            <motion.img
              drag={viewport === 'desktopsm' || viewport === 'desktop'}
              src={stndgl}
            />
          }
        >
          <motion.h3
            drag={viewport === 'desktopsm' || viewport === 'desktop'}
            className="vertical-timeline-element-title"
          >
            2021 Q3
          </motion.h3>
          <motion.p drag={viewport === 'desktopsm' || viewport === 'desktop'}>
            - Launch on Polygon and Shiden
            <br />
            - Release DEX MVP on Shiden
            <br />- Prepare LP on more DEXes
          </motion.p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{
            borderRadius: '12px',
          }}
          contentArrowStyle={{ borderRight: '7px solid  #F365BD' }}
          iconStyle={{
            background: '#000',
            borderColor: '#000',
            color: '#fff',
          }}
          icon={
            <motion.img
              drag={viewport === 'desktopsm' || viewport === 'desktop'}
              src={mtrgl}
            />
          }
        >
          <motion.h3
            drag={viewport === 'desktopsm' || viewport === 'desktop'}
            className="vertical-timeline-element-title"
          >
            2021 Q4
          </motion.h3>
          <motion.p drag={viewport === 'desktopsm' || viewport === 'desktop'}>
            - Expand multi-chain presence
            <br />
            - Launch MTR stablecoin and expand evm ecosystem
            <br />
            - Participate in Kusama & Polkadot parachain auction
            <br />- Beginning on GameFi
          </motion.p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{
            borderRadius: '12px',
          }}
          contentArrowStyle={{ borderRight: '7px solid  #F365BD' }}
          iconStyle={{
            background: '#000',
            borderColor: '#000',
            color: '#fff',
          }}
          icon={
            <motion.img
              drag={viewport === 'desktopsm' || viewport === 'desktop'}
              src={mtrgl}
            />
          }
        >
          <motion.h3
            drag={viewport === 'desktopsm' || viewport === 'desktop'}
            className="vertical-timeline-element-title"
          >
            2022
          </motion.h3>
          <motion.p drag={viewport === 'desktopsm' || viewport === 'desktop'}>
            - Release MTR v1.0 across multiple chains
            <br />
            - Integrate of 3rd Party wallets
            <br />
            - Release wallet native to MTR
            <br />
            - Expand CeFi and GameFi partnerships
            <br />- Scale pipelined project with DeFi partners
          </motion.p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{
            borderRadius: '12px',
          }}
          contentArrowStyle={{ borderRight: '7px solid  #F365BD' }}
          iconStyle={{
            background: '#000',
            borderColor: '#000',
            color: '#fff',
          }}
          icon={
            <motion.img
              drag={viewport === 'desktopsm' || viewport === 'desktop'}
              src={ltrgl}
            />
          }
        >
          <motion.h3
            drag={viewport === 'desktopsm' || viewport === 'desktop'}
            className="vertical-timeline-element-title"
          >
            Join our journey
          </motion.h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{
            borderRadius: '12px',
          }}
          contentArrowStyle={{ borderRight: '7px solid  #F365BD' }}
          iconStyle={{
            background: '#000',
            borderColor: '#000',
            color: '#fff',
          }}
          icon={
            <motion.img
              drag={viewport === 'desktopsm' || viewport === 'desktop'}
              src={stndgl}
            />
          }
        >
          <motion.h3
            drag={viewport === 'desktopsm' || viewport === 'desktop'}
            className="vertical-timeline-element-title"
          >
            It will be awesome
          </motion.h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{
            borderRadius: '12px',
          }}
          contentArrowStyle={{ borderRight: '7px solid  #F365BD' }}
          iconStyle={{
            background: '#000',
            borderColor: '#000',
            color: '#fff',
          }}
          icon={
            <motion.img
              drag={viewport === 'desktopsm' || viewport === 'desktop'}
              src={mtrgl}
            />
          }
        >
          <motion.h3
            drag={viewport === 'desktopsm' || viewport === 'desktop'}
            className="vertical-timeline-element-title"
          >
            Together, always better!
          </motion.h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: 'transparent' }}
          iconStyle={{ background: '#000', color: '#fff' }}
          icon={
            <motion.img
              drag={viewport === 'desktopsm' || viewport === 'desktop'}
              src={ltrgl}
            />
          }
        />
      </VerticalTimeline>
    </div>
  );
}

export default React.memo(styled(Roadmap)`
  color: ${(props) => props.theme.text};

  .vertical-timeline-element-content {
    background-color: ${(props) => props.theme.cardbg};
  }

  .Typewriter {
    text-align: start;
  }

  button {
    color: #fff;
  }

  h3 {
    color: #f365bd;
    font-size: 24px;
  }
  p {
    font-size: 16px;
  }
`);
