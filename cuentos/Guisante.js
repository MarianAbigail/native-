import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';

const pringuisante = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

    <Image style={{ width: '80%', height: '20%', marginVertical: 5, alignContent: 'center' }}
    source={{
            uri: 'https://i.ibb.co/59fWVxw/guisante.png',
        }}  
        />

        <Text style={styles.Titulos}>
        La princesa y el guisante

        </Text>

        <Text style={styles.text}>
        Érase una vez un apuesto príncipe que tenía el sueño de casarse con una princesa. 
        En su reino había muchas mujeres hermosas e inteligentes, pero él quería que su futura mujer tuviera sangre azul, 
        es decir, que fuera una princesa de verdad, hija de reyes y heredera de su propio reino. Hasta el momento no había tenido suerte, 
        pero no perdía la esperanza de encontrarla algún día.
        </Text>

        <Text style={styles.text}>
        El príncipe cumplía con todas sus obligaciones diarias y era un buen hijo. Una de las cosas que más le gustaba hacer después de cenar 
        era quedarse un rato conversando con sus padres, los reyes, junto a la chimenea del gran salón del castillo. Al calorcito del fuego, 
        los tres charlaban animadamente hasta altas horas de la madrugada.

        </Text>

        <Text style={styles.text}>
        Una noche de tormenta, mientras estaban en plena charla, alguien llamó a la puerta. A todos les extrañó, 
        pues la noche no era la más adecuada para estar a la intemperie.
        </Text>
       
        <Text style={styles.text}>
        – ¿Quién será a estas horas? – dijo el príncipe, levantando las cejas y mirando a su madre con extrañeza–. 
        No esperamos visitas en una noche de truenos y relámpagos
        </Text  >

        <Text style={styles.text} >
        El rey se dirigió ágilmente hacia la entrada. A pesar de ser casi un anciano, su estado físico y su salud eran realmente envidiables.
        Cuando abrió la puerta, su mandíbula se desencajó por la sorpresa. Ante sus ojos estaba una joven bajo la lluvia. 
        Su elegante vestido estaba totalmente empapado y de su pelo caían chorros de agua. La pobre tiritaba de frío y casi no podía hablar.
        </Text>
      

        <Text style={styles.text}>
        – Buenas noches, alteza. Me ha sorprendido una fuerte tormenta y me preguntaba si me darían cobijo en su castillo esta noche
        – dijo la bella joven.

        </Text>


        <Text style={styles.text}>
        – ¿Quién es usted, señorita? – preguntó el rey.

        </Text>

        <Text style={styles.text}>
        – Soy una princesa de uno de los reinos vecinos, señor – afirmó la muchacha.

        </Text>

        <Text style={styles.text}>
        – Pase, no se quede ahí. En nuestro hogar encontrará calor y alimento.

        </Text>

        <Text style={styles.text}>
        Enseguida la reina se acercó y le dio toallas para secarse y ropa limpia que ponerse. 
        El príncipe se percató de lo hermosa que era en cuanto la vio, pero… ¿se trataría de una verdadera princesa?

        </Text>

        <Text style={styles.text}>
        La reina, viendo cómo el príncipe la miraba embelesado, le dijo:

        </Text>
      
        <Text style={styles.text}>
        – Hijo mío, veo que esta chica es de tu agrado. 
        Ciertamente es muy hermosa y parece culta y educada. Comprobaremos si es una princesa de verdad.

        </Text>
      
        <Text style={styles.text}>
        – ¿Cómo lo haremos, madre? No se me ocurre de qué manera podemos asegurarnos
        – dijo el príncipe con perplejidad

        </Text>
      
        <Text style={styles.text}>
        – Muy fácil, querido hijo. Esta noche, debajo de su cama, pondremos un pequeño guisante. 
        Si nota su presencia es que dice la verdad, ya que sólo las verdaderas princesas tienen una sensibilidad tan grande.

        </Text>
      
        <Text style={styles.text}>
        Tal como habían previsto, la joven se quedó a dormir en el castillo. A la mañana siguiente, 
        se reunió de nuevo con la familia real en el salón principal.

        </Text>

        <Text style={styles.text}>
        – Buenos días, altezas – dijo la bella joven saludando con una pequeña reverencia.

        </Text>

        <Text style={styles.text}>
        – Buenos días – contestaron todos a la vez.

        </Text>

        <Text style={styles.text}>
        La reina invitó a la chica a sentarse con ellos a desayunar.

        </Text>

        <Text style={styles.text}>
        – ¿Qué tal has dormido? ¿Te ha resultado cómoda la cama y todo ha sido de tu gusto? – le preguntó.
        </Text>
      
        <Text style={styles.text}>
        – Pues si le digo la verdad, señora, he dormido fatal – se quejó -. 
        Me he pasado la noche dando vueltas en la cama. Sentía algo duro que no me dejaba dormir y no pude descansar en toda la noche. 
        Fíjese, señora, que hasta tengo moratones en la espalda y los brazos. ¡No entiendo qué ha podido suceder!

        </Text>

        <Text style={styles.text}>
        La reina, sonriendo satisfecha, le contó la verdad.

        </Text>

        <Text style={styles.text}>
        – Sucede que debajo de tu colchón puse un guisante para comprobar si eras realmente sensible. 
        Sólo una auténtica princesa con delicada piel es capaz de notar la dureza de un pequeño guisante debajo de un colchón. 
        Ciertamente tú lo eres y estaríamos encantados de que fueras la esposa de nuestro amado hijo.

        </Text>

    <Text style={styles.text}>
    La princesa se sonrojó. También se había quedado prendada del apuesto heredero, así que no dudó ni un momento y dijo que sí. 
    El príncipe, que había recorrido medio mundo buscando a su princesa, al final la encontró en su propia casa.

    </Text>

    <Text style={styles.text}>
    Fin.

    </Text>
      

    </ScrollView>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: '#FA9487',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  text: {
    fontSize: 25,
    color: '#EDD0F8',
    marginVertical: 10,
    
  },

  Titulos:{
    fontSize: 34,
    fontWeight: 'bold',
    color: '#F0ACEE',
    textAlign: 'center',

  },
});

export default pringuisante;