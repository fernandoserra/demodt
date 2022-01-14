import { StyleSheet } from 'react-native';


export const stylesPerson = (theme) => StyleSheet.create({
  //export default StyleSheet.create({

  largeButtonText: {
    //fontSize: theme.FONT_SIZE_LARGE,
    //fontWeight: theme.FONT_WEIGHT_HEAVY,
    color: theme.color
  },
  largeHeaderText: {
    fontSize: theme.FONT_SIZE_LARGE
  },
  mediumHeaderText: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.FONT_SIZE_LARGE
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  }
  
});


