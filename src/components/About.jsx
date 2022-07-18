import React, { useState, useEffect, useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { Card, Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import { ThemeContext } from 'styled-components';

const styles = {
  introTextContainer: {
    margin: 10,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    fontSize: '1.2em',
    fontWeight: 500,
  },
  introImageContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
};

function About(props) {
  let theme = useContext(ThemeContext);
  const { header } = props;
  const [data, setData] = useState(null);

  const parseIntro = (text) => (
    <ReactMarkdown
      children={text}
    />
  );

  useEffect(() => {
    fetch(endpoints.about, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (

    <>
      <Header title={header} />

      <div className="section-content-container1">
        <Container>
          {data
            ? (
              <Fade>
                <Row>
                  <Col>
                    <Card
                      style={{
                        ...styles.cardStyle,
                        backgroundColor: theme.cardBackground,
                        borderColor: theme.cardBorderColor,
                      }}
                      text={theme.bsSecondaryVariant}
                    >
                      <div className="row">
                        <div className="col-md-9">
                          <Card.Body>
                            <Card.Title style={styles.cardTitleStyle}>Jacob Yi</Card.Title>
                            <Card.Text style={styles.cardTextStyle} style={{ textAlign: 'left' }}>
                              {parseIntro(data.about)}
                            </Card.Text>

                          </Card.Body>

                        </div>
                        <div className="col-md-3">
                          <img src={data.imageSource} alt="profile" />
                        </div>
                      </div>
                      </Card>

                  </Col>

                  {/* <Col style={styles.introTextContainer}>
                    {parseIntro(data.about)}
                  </Col>
                  <Col style={styles.introImageContainer}>
                    <img src={data?.imageSource} alt="profile" />
                  </Col> */}
                </Row>
              </Fade>
            )
            : <FallbackSpinner />}
        </Container>
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
