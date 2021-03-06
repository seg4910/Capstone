import React, { Component } from "react";
import { StyleSheet } from "react-native";

import ServiceCard from "./ServiceCard.js";

class ServicePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servicePreviews: [],
      username: "",
      selectedService: 0
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/getServicePreviews")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            servicePreviews: responseJson.servicePreviews
          },
          function() {
            if (this.state.servicePreviews) {
              var serviceCount = Object.keys(this.state.servicePreviews);
            } else {
              //navigate to Create Account
              alert("Something went wrong");
            }
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  selectService = data => {
    if (data !== 0) {
      this.props.navigation.navigate("Service", {
        selectedService: data
      });
    }
  };

  servicePreviewList() {
    return this.state.servicePreviews.map(data => {
      return (
        <ServiceCard
          id={data.id}
          serviceName={data.serviceName}
          sellerName={data.sellerName}
          serviceDescription={data.serviceDescription}
          minPrice={data.minPrice}
          maxPrice={data.maxPrice}
          navigation={this.props.navigation}
          style={{flexDirection:'row'}}
        />
      );
    });
  }

  render() {
    const { navigation } = this.props;
    return this.servicePreviewList();
  }
}

const st = require("./style");
const styles = StyleSheet.create({});
export default ServicePreview;
