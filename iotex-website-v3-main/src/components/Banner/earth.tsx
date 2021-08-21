import React from 'react';
import { Box, Flex, Menu, MenuButton, useDisclosure, MenuList, MenuItem, Image, Text,  IconButton, Center } from '@chakra-ui/react';
import {  useHistory } from 'react-router-dom';
import { useStore } from '../../store';
import { Link } from "@chakra-ui/react"
import { observer, useLocalStore } from 'mobx-react-lite';
import { IoMenu } from "react-icons/io5";

export const Earth = observer(() => {
    return (
      <svg width="1920" height="900" viewBox="0 0 1920 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M643.001 854.876C770.067 840.761 909.175 813.535 1052.65 772.738C1565.24 626.976 1939.44 363.165 1888.43 183.499C1837.43 3.83273 1380.54 -23.6521 867.939 122.11C355.342 267.871 -18.852 531.683 32.1537 711.349C68.8457 840.595 315.582 891.089 642.001 854.987" opacity="0" stroke="#CCCCCC" strokeMiterlimit="10"/>
        <path d="M1052.65 772.738C1565.24 626.976 1939.44 363.165 1888.43 183.499C1837.43 3.83273 1380.54 -23.6521 867.938 122.11C355.341 267.871 -18.8529 531.683 32.1527 711.349C83.1583 891.014 540.049 918.499 1052.65 772.738Z" stroke="url(#paint0_linear)" strokeOpacity="0.8" strokeMiterlimit="10"/>
        <circle cx="0" cy="0" r="20" fill="#4A99BF">
          {/* <animateTransform attributeName="transform" type="scale" from="0.5" to="1" dur="10s" repeatCount="indefinite" /> */}
          <animateMotion path="M643.001 854.876C770.067 840.761 909.175 813.535 1052.65 772.738C1565.24 626.976 1939.44 363.165 1888.43 183.499C1837.43 3.83273 1380.54 -23.6521 867.939 122.11C355.342 267.871 -18.852 531.683 32.1537 711.349C68.8457 840.595 315.582 891.089 642.001 854.987"
            begin="0s" dur="10s"  repeatCount="indefinite"/>
        </circle>
        <path d="M222 797.212C143.247 773.253 91.5783 734.974 76.7999 682.917C28.921 514.265 386.377 264.863 875.199 125.862C1364.02 -13.1387 1799.1 10.898 1846.98 179.55C1894.86 348.202 1537.41 597.603 1048.58 736.605C711.281 832.52 399.566 850.805 223 797.515" opacity="0" stroke="#CCCCCC" strokeMiterlimit="10"/>
        <path d="M1048.58 736.605C1537.41 597.603 1894.86 348.202 1846.98 179.55C1799.1 10.898 1364.02 -13.1387 875.199 125.862C386.377 264.863 28.921 514.265 76.7999 682.917C124.679 851.569 559.761 875.606 1048.58 736.605Z" stroke="url(#paint1_linear)" strokeOpacity="0.8" strokeMiterlimit="10"/>
        <circle cx="0" cy="0" r="20" fill="#3B68A9">
          {/* <animateTransform attributeName="transform" type="scale" from="0.5" to="1" dur="10s" repeatCount="indefinite" /> */}
          <animateMotion path="M222 797.212C143.247 773.253 91.5783 734.974 76.7999 682.917C28.921 514.265 386.377 264.863 875.199 125.862C1364.02 -13.1387 1799.1 10.898 1846.98 179.55C1894.86 348.202 1537.41 597.603 1048.58 736.605C711.281 832.52 399.566 850.805 223 797.515"
            begin="0s" dur="10s"  repeatCount="indefinite"/>
        </circle>
        <path d="M394.5 782.259C243.751 770.311 141.466 726.504 120.45 652.473C75.6978 494.836 416.377 259.854 881.378 127.627C1346.38 -4.60069 1759.62 15.9984 1804.37 173.636C1849.12 331.274 1508.44 566.256 1043.44 698.483C797.297 768.476 565.658 795.647 395.5 782.338" opacity="0" stroke="#CCCCCC" strokeMiterlimit="10"/>
        <path d="M1043.44 698.483C1508.44 566.256 1849.12 331.274 1804.37 173.636C1759.62 15.9984 1346.38 -4.60069 881.378 127.627C416.377 259.854 75.6978 494.836 120.45 652.473C141.466 726.504 243.751 770.311 394.5 782.259C564.75 795.753 796.814 768.613 1043.44 698.483Z" stroke="url(#paint2_linear)" strokeOpacity="0.8" strokeMiterlimit="10"/>
        <circle cx="0" cy="0" r="12" fill="#73CFD0">
          {/* <animateTransform attributeName="transform" type="scale" from="0.5" to="1" dur="10s" repeatCount="indefinite" /> */}
          <animateMotion path="M394.5 782.259C243.751 770.311 141.466 726.504 120.45 652.473C75.6978 494.836 416.377 259.854 881.378 127.627C1346.38 -4.60069 1759.62 15.9984 1804.37 173.636C1849.12 331.274 1508.44 566.256 1043.44 698.483C797.297 768.476 565.658 795.647 395.5 782.338"
            begin="0s" dur="10s"  repeatCount="indefinite"/>
        </circle>
        <defs>
        <linearGradient id="paint0_linear" x1="4.46607" y1="701.188" x2="1379.91" y2="184.39" gradientUnits="userSpaceOnUse">
        <stop stopColor="#44F3FE" stopOpacity="0.8"/>
        <stop offset="1" stopColor="#775AED" stopOpacity="0.2"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="50.5378" y1="670.951" x2="1358.95" y2="174.745" gradientUnits="userSpaceOnUse">
        <stop stopColor="#44F3FE" stopOpacity="0.8"/>
        <stop offset="1" stopColor="#775AED" stopOpacity="0.2"/>
        </linearGradient>
        <linearGradient id="paint2_linear" x1="95.6115" y1="638.731" x2="1336.83" y2="163.168" gradientUnits="userSpaceOnUse">
        <stop stopColor="#44F3FE" stopOpacity="0.8"/>
        <stop offset="1" stopColor="#775AED" stopOpacity="0.2"/>
        </linearGradient>
        </defs>
      </svg>
    );
});
