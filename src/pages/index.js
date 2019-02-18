import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Icon from 'components/Icon'

class home extends React.Component {
  render() {
    const { location, data } = this.props
    const home = get(data, 'profile.childImageSharp.fixed')
    const work1 = get(data, 'work1.childImageSharp.sizes')
    const work2 = get(data, 'work2.childImageSharp.sizes')
    const back1 = get(data, 'back1.childImageSharp.sizes')
    const back2 = get(data, 'back2.childImageSharp.sizes')

    return (
      <Layout location={(location, data)}>
        <Meta site={siteMetadata} title="Home" />
        <div>
          <section className="bg-light text-blue text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="section-heading">
                    Artworks with augmented reality
                  </h2>
                  <hr className="border-white" />
                  <h3 className="section-heading">Interactive art</h3>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-lg-3 col-6">
                  <Icon title="HTML" name="html5" />
                </div>
                <div className="col-lg-3 col-6">
                  <Icon title="JavaScript" name="js" />
                </div>
                <div className="col-lg-3 col-6">
                  <Icon title="React.js" name="react" />
                </div>
                <div className="col-lg-3 col-6">
                  <Icon title="Vue.js" name="vuejs" />
                </div>
              </div>
              <div className="row justify-content-md-center">
                <div className="col-lg-3 col-6">
                  <Icon title="Node.js" name="node" />
                </div>
                <div className="col-lg-3 col-6 ">
                  <Icon title="PHP" name="php" />
                </div>
                <div className="col-lg-3 col-6 ">
                  <Icon title="AWS" name="aws" />
                </div>
                <div className="col-lg-3 col-6 ">
                  <Icon title="Swift" name="apple" />
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="text-center jumboimage">
            <Img sizes={back1} className="cover-image" />
            <div className="container">
              <div className="row cover-over">
                <div className="col-md-12 text-left">
                  <blockquote>
                    <p>
                      "Some painters transform the sun into a yellow spot,
                      others transform a yellow spot into the sun."
                    </p>
                    <small>Pablo Picasso</small>
                  </blockquote>
                </div>
              </div>
            </div>
          </section>

          <section
            className="bg-primary text-white text-center color-inverse"
            id="concept"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="section-heading">WORKS</h2>
                  <hr className="border-white" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-6 slide-left" data-emergence="hidden">
                  <Img sizes={work1} />
                  <p>Sculpture</p>
                </div>
                <div className="col-md-6 slide-right" data-emergence="hidden">
                  <Img sizes={work2} />
                  <p>Painting</p>
                </div>
              </div>
            </div>
          </section>

          <section id="repos">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-12 text-left">
                  <h2 className="section-heading">Repositories</h2>
                  <p>
                    リポジトリは
                    <a href="https://github.com/jaxx2104/">こちら</a>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="features" className="jumboimage">
            <Img sizes={back2} className="cover-image" />
            <div className="container">
              <div className="row cover-over">
                <div className="col-md-12 text-left">
                  <h2 className="section-heading">Degree Works</h2>
                  <p>
                    過去の制作は
                    <a className="text-white" href="https://old.jaxx2104.info/">
                      こちら
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default home

export const query = graphql`
  query HomePageQuery {
    profile: file(name: { eq: "profile" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    work1: file(name: { eq: "work1" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    work2: file(name: { eq: "work2" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    work3: file(name: { eq: "work3" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    back1: file(name: { eq: "back1" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    back2: file(name: { eq: "back2" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`
