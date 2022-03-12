import React, { useContext } from 'react'
import { View, StyleSheet, Text, useWindowDimensions, FlatList } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import themeContext from '../context/themeContext';


const TabsViewScreen = () => {

    const data = [
        { name: "pepe 1" },
        { name: "pepe 2" },
        { name: "pepe 3" },
        { name: "pepe 4" },
        { name: "pepe 5" },
        { name: "pepe 6" },
        { name: "pepe 7" },
        { name: "pepe 8" },
        { name: "pepe 9" },
        { name: "pepe 10" },
        { name: "pepe 11" },
        { name: "pepe 12" },
        { name: "pepe 13" },
        { name: "pepe 14" },
        { name: "pepe 15" },
        { name: "pepe 16" },
        { name: "pepe 17" },
        { name: "pepe 18" },
        { name: "pepe 19" },
        { name: "pepe 20" },
        { name: "pepe 21" },
        { name: "pepe 22" },
        { name: "pepe 23" },
        { name: "pepe 24" },
        { name: "pepe 25" },
        { name: "pepe 26" },
        { name: "pepe 27" },
        { name: "pepe 28" },
        { name: "pepe 29" },
        { name: "pepe 30" }

    ]
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
        { key: 'three', title: 'Three' },
        { key: 'four', title: 'Four' },

    ]);

    const FirstRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
    );

    const SecondRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#673ab7' }}>
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <Text style={{fontSize:20, marginBottom:10}}>{item.name}</Text>  
                }
            />
        </View>
    );
    
    const ThreedRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#673ab7' }}>
            <Text>Three</Text>
        </View>
    );

    const FourRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#673ab7' }}>
            <Text>Four</Text>
        </View>
    );

    const FiveRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#673ab7' }}>
            <Text>Five</Text>
        </View>
    );

    const SixRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#673ab7' }}>
            <Text>Six</Text>
        </View>
    );

    const SevenRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#673ab7' }}>
            <Text>Seven</Text>
        </View>
    );



    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        three: ThreedRoute,
        four:FourRoute
    });


    const renderTabBar = props => (
        <TabBar
              {...props}
              activeColor={'white'}
              inactiveColor={'black'}
              style={{marginTop:0,backgroundColor:'red'}}
              /*onTabPress={({ route, preventDefault }) => {
                if (route.key === 'first') {
                  //preventDefault();
                    console.log('first first first')
                  // Do something else
                }
              }}*/
              onTabPress={(scene) => {
                const { route } = scene
                props.jumpTo(route.key)
              }}
              /*onTabLongPress={(scene) => {
                const { route } = scene
                props.jumpTo(route.key)
              }}*/
        />
      );
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    )
}

const styles = StyleSheet.create({})

export default TabsViewScreen
