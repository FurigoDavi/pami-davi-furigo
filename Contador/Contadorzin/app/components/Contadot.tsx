import React from 'react';
import { Button, StyleSheet, Text, View} from 'react-native';

export default class Contador extends React.Component {
    constructor() {
        super();
        this.state = {
            contador:0,
        };
    }
    Decrementar() {
        this.setState({
            contador: this.state.contador - 1
        });
    }
    Incrementar(){
        this.setState({
            contador: this.state.contador + 1
        });
    }
    render() {
        return(
            <View>
                <View style={styles.texto}>
                    <Text>{this.state.contador}</Text>
                </View>
                <View style={StyleSheet.botoes}>
                    <Button
                        style={styles.botao1}
                        title="Grandessa"
                        onPress={this.Incrementar.bind(this)}
                    />
                    <Button
                        style={styles.botao2}
                        title="Diminuir :)"
                         onPress={this.Decrementar.bind(this)}
                    />
                </View>
            </View>
        );
    }
 }

 const styles = StyleSheet.create({
    botoes: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        top: 220,
        height: 40,
    },
    texto: {
        alignItems: 'center',
        top: 200,
    },
 });