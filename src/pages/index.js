import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <p style={{ lineHeight: '1.67' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum
      purus ac enim finibus, sit amet hendrerit eros finibus. Praesent rutrum
      libero quam, in efficitur felis iaculis quis. Quisque id elit sed risus
      consectetur scelerisque. Nullam porttitor mi vitae tortor vehicula
      elementum. Vivamus mollis augue non eros consequat, nec faucibus nibh
      vulputate. Etiam sed quam ultricies justo dapibus laoreet. Sed rutrum
      lorem ac urna porta, luctus dignissim libero laoreet. Nunc in ultrices ex,
      in suscipit libero. Suspendisse imperdiet sem id massa volutpat, vitae
      dapibus lacus tincidunt. Proin accumsan, nisi ut aliquam placerat, est
      tortor pretium ex, nec iaculis turpis ipsum nec diam. Proin at est id nisi
      pellentesque pellentesque laoreet et diam. Vestibulum facilisis luctus ex
      ut ornare. Sed varius nisi dui, quis hendrerit dolor sodales ut.
    </p>
    <p style={{ lineHeight: '1.67' }}>
      Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur
      vestibulum vitae nisl at pulvinar. Etiam sit amet dictum risus. Sed eget
      lobortis nibh, at vulputate neque. Donec id porta augue. Ut iaculis diam
      in elementum dignissim. Nulla malesuada leo a nisi imperdiet, ac fringilla
      lectus maximus. Pellentesque eu augue eget mauris tempus placerat. Nam
      diam turpis, imperdiet non sapien et, ultricies dapibus mauris. Morbi
      porta metus in odio accumsan bibendum. Etiam cursus felis non libero
      tempor vulputate.
    </p>
    {/* <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
