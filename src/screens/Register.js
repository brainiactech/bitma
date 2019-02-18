import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
export default class FixedLabelExample extends Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Container>
       
        <Content>
        <Card>
            <CardItem>
              <Body>
              <Form>
            <Item fixedLabel>
              <Label>First Name</Label>
              <Input  />
            </Item>
            <Item fixedLabel >
              <Label>Last Name</Label>
              <Input />
            </Item>
            <Item fixedLabel >
              <Label>Phone Number</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Email</Label>
              <Input />
            </Item>
            <Button block success>
            <Text>Success</Text>
          </Button>
          </Form>
              </Body>
            </CardItem>
          </Card>
        
        </Content>
      </Container>
      </View>
    );
  }
}