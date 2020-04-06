import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import firebase from '../../api/firebase';
import { Colors, globalStyles } from '../../constants';
import Markers from '../../components/markers';
import MapView, { Polygon } from 'react-native-maps';
import { red } from 'react-native-redash';

const feedListItem = props => {

    return (
        <View style={styles.feedContainer}>
                <View style={styles.feedItems}>
                    <View style={styles.profiel}>
                        <View>
                            {firebase.getCurrentUser()?.photoURL ? 
                            <Avatar source={{uri: firebase.getCurrentUser()?.photoURL}} size="small" rounded ></Avatar> : 
                            <Avatar title='RD' size="small" rounded ></Avatar> }
                        </View>
                        <View style={{marginLeft: 10, flexDirection: 'column'}}>
                            <View>
                            {firebase.getCurrentUser()?.email ?
                                <Text style={globalStyles.bodyText}>{firebase.getCurrentUser()?.email}</Text> :
                                <Text>Name not rendered!</Text>}
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Icon
                                    type='ionicon'
                                    name='ios-calendar'
                                    color={Colors.secondary}
                                    size={15}
                                />
                                <Text style={globalStyles.bodyText}> xx-xx-xx</Text>
                            </View>
                        </View>
                        <View >
                            <TouchableOpacity style={{alignItems: 'flex-end', justifyContent: 'center', flex: 1, marginRight: '3%'}}>
                                <View style={{borderWidth: 1.5, borderColor: globalStyles.secondary, borderStyle: "solid", borderRadius: 100/2, backgroundColor: 'white', width: "60%", height: 30, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                                    <Text>Share</Text>
                                    <Icon
                                        type='ionicon'
                                        name='ios-share-alt'
                                        color={Colors.secondary}
                                        size={20}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.sessieNaam}>
                        <Text style={globalStyles.headerText}>Naam sessie</Text>
                    </View>
                    <View style={styles.sessieStats}>
                            <View>
                                <Icon
                                    type='ionicon'
                                    name='ios-pin'
                                    color={Colors.secondary}
                                    size={30}
                                />
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <View style={styles.textAllignStats}><Text style={globalStyles.bodyText}>Afstand</Text></View>
                                <View style={styles.textAllignStats}><Text style={globalStyles.bodyText}>-</Text></View>
                            </View>
                            <View style={styles.seperatorIcons}></View>
                            <View>
                                <Icon
                                    type='ionicon'
                                    name='ios-bicycle'
                                    color={Colors.secondary}
                                    size={30}
                                />
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <View style={styles.textAllignStats}><Text style={globalStyles.bodyText}>Tempo</Text></View>
                                <View style={styles.textAllignStats}><Text style={globalStyles.bodyText}>-</Text></View>
                            </View>
                            <View style={styles.seperatorIcons}></View>
                            <View>
                                <Icon
                                    type='ionicon'
                                    name='ios-timer'
                                    color={Colors.secondary}
                                    size={30}
                                />
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <View style={styles.textAllignStats}><Text style={globalStyles.bodyText}>Tijd</Text></View>
                                <View style={styles.textAllignStats}><Text style={globalStyles.bodyText}>-</Text></View>
                            </View>
                            <View style={styles.seperatorIcons}></View>
                            <View>
                                <Icon
                                    type='ionicon'
                                    name='ios-medal'
                                    color={Colors.secondary}
                                    size={30}
                                />
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <View style={[styles.textAllignStats, {flex: 4, alignItems: 'flex-end'}]}><Text style={globalStyles.bodyText}>Pretaties</Text></View>
                                <View style={[styles.textAllignStats, {flex: 4, alignItems: 'flex-end'}]}><Text style={globalStyles.bodyText}>Gold</Text></View>
                            </View>
                    </View>
                    <View style={styles.kaart}>
                        {/* <Text>test</Text> */}
                        <Image 
                            style={styles.image} 
                            source={require('../../assets/route.png')}
                        />
                    </View>
                        <TouchableOpacity onPress={() => console.log('TODO: Link button')}>
                            <View style={styles.interact}>
                                <View style={styles.shareButton}>
                                    <Text style={globalStyles.bodyText}>See Details</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    {/* <Text style={{fontWeight: '100', color: Colors.secondary, fontWeight: '500'}}>{props.title}</Text> */}
                </View>
        </View>)
}

    const styles = StyleSheet.create({
        image: {
            flex: 1,
            position: 'absolute',
            transform: [{ scale: 0.30}],
            top: -275
        },
        seperatorIcons: {
            width: 1.5,
            marginTop: '1%',
            marginBottom: "1%",
            backgroundColor: "#CED0CE",
            justifyContent: 'center'
        },
        shareButton: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: Colors.primary,
            borderColor: Colors.primary,
            borderWidth: 2,
            borderRadius: 20,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 3},
            shadowRadius: 4.22,
            shadowOpacity: 0.32,
            elevation: 3,
            height: 30
        },
        textAllignStats: {
            flex: 3,
            alignItems: 'flex-start',
        },
        profiel: {
            flexDirection: 'row',
            marginTop: '3%'
        },
        sessieNaam: {
            marginBottom: '2%',
            marginTop: '2%'
        },
        sessieStats: {
            flexDirection: 'row',
            justifyContent: 'space-evenly'
        },
        kaart: {
            backgroundColor: 'red',
            height: 200,
            borderColor: Colors.primary,
            borderWidth: 2,
            borderRadius: 5,
            position: 'relative',
            marginTop: '2%',
            marginBottom: '2%',
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center'
        },
        interact: {
            flexDirection: "row",
            marginBottom: '5%'
        },
        feedContainer: {
            backgroundColor: 'white',
            marginLeft: '2%',
            marginRight: "2%",
            shadowColor: 'black',
            shadowOffset: {width: 2, height: 10},
            shadowRadius: 6,
            shadowOpacity: 0.26,
            elevation: 6
        },
        feedItems: {
            marginBottom: '1%',
            marginTop: '3%',
            marginLeft: '3%',
            marginRight: '3%',
            padding: "1%"
        }
    });

export default feedListItem;