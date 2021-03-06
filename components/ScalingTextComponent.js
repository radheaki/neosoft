import React,{useEffect,useState} from 'react';
import {Animated , View , Text ,Easing,StyleSheet} from 'react-native';

const ScalingTextComponent = (props) => {
    const [regsterView] = useState(new Animated.Value(0))
    const {title} = props;

    const registerViewAnimation =()=>{
        Animated.loop(Animated.timing(regsterView,{
          toValue:1,
          duration:3000,
         easing:Easing.bounce,
          useNativeDriver:true
      }),{iterations:-1}).start()
      }

      const scaleInterpolation = regsterView.interpolate({
        inputRange:[0,1],
        outputRange:[0.8,1.2]
    })
  
  
    const opacityInterpolate = regsterView.interpolate({
        inputRange:[0,1],
        outputRange:[0.4,1]
    })

    const logoStyle={
        transform:[{scale:scaleInterpolation}],
        opacity:opacityInterpolate
    }

    useEffect(()=>{
        registerViewAnimation();
        
    },[])


    return (
        <Animated.View style={[logoStyle]}>
               <Text style={styles.titleStyle}>{title}</Text> 
        </Animated.View>
    );
}

const styles= StyleSheet.create({
    titleStyle:{
        fontSize:16,
        fontWeight:'800',
        color:"#61f0e4"
    }
})

export default ScalingTextComponent;