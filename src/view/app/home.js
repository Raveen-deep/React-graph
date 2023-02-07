import React from "react";
import LineGraph from "../../components/LineGraph";
import BarGraph from "../../components/BarGraph";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
// import Col from "react-bootstrap/Col";
export default function Home() {
    const x_axis_data = [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const y_axis_data = [
        80, 85, 30, 150, 85, -40, 10.5, 32, 50, 60, 20, -25, -14,
    ];
    return (
        <>
            <div className="charts">
                <Container fluid>
                    <Row>
                        <Col md={6} xs={12}>
                            <LineGraph
                                x_axis_data={x_axis_data}
                                y_axis_data={y_axis_data}
                                label={"Line Chart with Fill"}
                                fill={true}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <LineGraph
                                x_axis_data={x_axis_data}
                                y_axis_data={y_axis_data}
                                label={"Line Chart without Fill"}
                                fill={false}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <BarGraph
                                x_axis_data={x_axis_data}
                                y_axis_data={y_axis_data}
                                label={"Bar Graph"}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
