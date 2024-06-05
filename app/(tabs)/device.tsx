import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Link } from 'expo-router';

const DeviceScreen = () => {
    const handleAddDevice = () => {
        console.log("Adicionar dispositivo");
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                    <Image
                        source={{
                            uri: "https://cvws.icloud-content.com/B/AV3Aw5UuvS-VCrfJgzR4RT8piK6YATw_HzkSWRcOS36MHgL4jx7Vq8X8/Imagem+do+WhatsApp+de+2024-04-18+%C3%A0%28s%29+16.47.54_b011dcb1.jpg?o=Ap7XeMlJ1mSxcYp3_xGi3mTOsv3Y8F5JXacQ-kDmcmg5&v=1&x=3&a=CAog1OLX2QB5aFwoT5dezFfSTobs8-qMtCfDe79AO6JJC34SbxD44tud_jEY-L-3n_4xIgEAUgQpiK6YWgTVq8X8aidlWEydAf4nbh-YX9szYukB2NeOD5RQP-OSw5GP8V-iwGEPERYRbx5yJ6ouzLFKGTs1RU_5vQ6ej_WVSdVVF-yl9Ukw0adYRzQdgXyM4efbug&e=1717515968&fl=&r=3ab3b86d-3290-4833-b4e9-a8f8e04b2b9b-1&k=wdCrDin3RW-2GWZmJWzVqw&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=70&s=SBPFRclwLOqEIRXr1RF7NkWaJSg&cd=i",
                        }}
                        style={styles.image}
                    />
                    
                    <Link href="/addDevice" style={styles.addButton}>+</Link>
                </View>
            <View style={styles.content}>
                <View style={styles.devices}>
                
                    <View style={styles.device}>
                        <Text style={styles.deviceText}>ID: 45612312456</Text>
                        <Text style={styles.deviceText}>Placa: TRY7H40</Text>
                        <Text style={styles.deviceText}>Chassi: 5E11YkUC7pBbA751b</Text>
                        <View style={styles.statusContainer}>
                            <View style={styles.statusDot} />
                            <Text style={styles.statusText}>Ativo</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.buttonText}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.blockButton}>
                        <Text style={styles.buttonText}>Bloquear Ignição</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton}>
                        <Text style={styles.buttonText}>Excluir</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.footerText}>Algum problema? Contate-nos</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 50,
        paddingHorizontal: 20,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: 'flex-start',
    },
    image: {
        width: 60,
        height: 60,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 10,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '95%',
        width: '100%',
    },
    devices:{
        marginTop: 40,
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
    },
    addButton: {
        backgroundColor: "#011D80",
        borderRadius: 50,
        width: 60,
        height: 60,
        textAlign: 'center',
        fontSize: 42,
        color: 'white',
    },
    device: {
        width: "90%",
        padding: 20,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        backgroundColor: "#f5f5f5",
        marginBottom: 20,
    },
    deviceText: {
        fontSize: 24,
        marginBottom: 5,
    },
    statusContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    statusDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "green",
        marginRight: 5,
    },
    statusText: {
        fontSize: 24,
        color: "green",
    },
    footerText: {
        fontSize: 16,
        color: "gray",
        marginTop: 20,
    },
    editButton: {
        marginTop: 20,
        width: 350,
        height: 60,
        backgroundColor: '#018021',
        padding: 15,
        borderRadius: 8,
    },
    blockButton: {
        marginTop: 20,
        width: 350,
        height: 60,
        backgroundColor: '#011D80',
        padding: 15,
        borderRadius: 8,
    },
   deleteButton: {
        marginTop: 20,
        width: 350,
        height: 60,
        backgroundColor: '#800101',
        padding: 15,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
      },
});

export default DeviceScreen;
