import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';

const hinvierno = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

      <Image style={{ width: '20%', height: '20%', marginVertical: 5, alignContent: 'center' }}
       source={{
            uri: 'https://i.ibb.co/wLCKCSd/hada-de-invierno.png',
        }}  
        />

        <Text style={styles.Titulos}>
        El hada de invierno

        </Text>

        <Text style={styles.text}>
        Aquel otoño no era un otoño normal. Las cosas no ocurrían como otros años,
        en los que las hojas de los árboles se volvían amarillas, naranjas y rojas y adornaban las copas durante semanas antes de marchitarse
        y cubrir el suelo con un manto ocre y crujiente. No. Aquel otoño las hojas morían de repente y dejaban a los árboles desnudos en cuestión de días. 
        Estaba claro que algo muy extraño estaba pasando en el bosque.
      </Text>

      <Text style={styles.text}>
      El Rey del Bosque, un ciervo rojo cuya gran cornamenta daba una pista de su avanzada edad, convocó a los animales para informarles del problema e intentar,
        entre todos, encontrar una solución para recuperar el otoño.

        </Text>

      <Text style={styles.text}>
      – ¿Alguien ha visto o notado algo raro? -preguntó el ciervo. 
        – No sé si os habéis fijado -dijo, tímidamente una ardilla- Entre las ramas de algunos árboles se extienden unos finos hilos. Parecen telas de araña pero,
        si miráis bien, veréis que están hechos de hielo.
        </Text>
       
      <Text style={styles.text}>
        Todos los animales alzaron la cabeza a un tiempo para observar las ramas. Y así era. Lo que a simple vista parecían telas de araña eran, en realidad,
        complejos entramados de finos hilos de hielo. Por si quedaba alguna duda, la ardilla trepó hasta uno de los árboles y comenzó a golpearlos con su hábil manita. 
        Los hilos se quebraban con gemidos musicales.
        </Text  >

        <Text style={styles.text} >
        – ¡Eh, oye! Pero, ¡¿qué haces?! ¿Tú sabes lo que me cuesta construir tan sólo una de estas figuritas? ¡Fuera de mi árbol! -gritó una vocecita impertinente.
        </Text>
      

      <Text style={styles.text}>
      La ardilla dio un respingo y corrió, tronco abajo, a refugiarse junto al resto de animales del bosque. Frente a ellos, una pequeña figura alada, de colores azulados,
        revoloteaba sin ton ni son. Estaba muy enfadada.

      </Text>


      <Text style={styles.text}>
      – ¿Quién eres? – se atrevió a preguntar uno de los osos.

      </Text>

      <Text style={styles.text}>
      – Soy un hada del invierno -respondió la figurilla. Y mirando al oso de arriba a abajo añadió, inquisidora: -La pregunta es: ¿Quién eres tú?

      </Text>

      <Text style={styles.text}>
      – ¿Yo? – respondió desconcertado el oso – Pues… soy… un oso.

      </Text>

      <Text style={styles.text}>
      – ¡Un oso! – exclamó el hada, revoloteándole alrededor, con curiosidad. -Nunca había visto ninguno. ¿Y sabes por qué? Porque los osos no tenéis ni idea de lo que es el invierno,
        os lo pasáis entero durmiendo en una cueva. ¡Así que, a callar!

      </Text>

      <Text style={styles.text}>
      – ¡Ni las hadas del invierno tenéis ni idea de lo que es el otoño! – salió en defensa del oso la pequeña ardilla.
        ¡Según parece eres la responsable de este desastre! ¡Queremos que nos lo devuelvas!

      </Text>
      
      <Text style={styles.text}>
      Sin hacerle ningún caso, el hada del invierno se perdió, revoloteando, en la espesura del bosque. ¡Como si no tuviera ya suficientes problemas!
        No entendía qué manía les había entrado con el otoño a esos animales. ¡Claro que tenía idea de lo que era el otoño! Una estación tonta que no servía para nada.
        ¿Para qué esperar semanas a que se caigan las hojas de los árboles? Cuanto antes se acabara con eso, mucho mejor. Más tiempo para disfrutar del fresquito del invierno, 
        de la blanca nieve, del olor de las hogueras y el humo saliendo las chimeneas… ¡Eso es lo que realmente entusiasmaba a las hadas del invierno!

      </Text>
      
      <Text style={styles.text}>
      Al cabo de un rato, el hada se paró a descansar sobre el mullido musgo que crecía en un viejo tronco muerto. Entonces escuchó una vocecita que se quejaba constantemente.
        Era un ratoncillo que hurgaba entre las hojas muertas.

      </Text>
      
      <Text style={styles.text}>
      – Nada, ¡ni una! Esto es el fin. ¡Pero, ¿será posible?! -se lamentaba el roedor.

      </Text>
      
      <Text style={styles.text}>
      – ¿Por qué te quejas tanto? Me estás poniendo de mal humor con tus lamentos -se quejó el hada.

      </Text>

      <Text style={styles.text}>
      El ratoncito levantó la cabeza y vio al hada, de pie sobre el tronco muerto, que lo miraba con los brazos en jarras.

      </Text>

      <Text style={styles.text}>
      – ¿No sabrás dónde puedo encontrar avellanas este año? O nueces, o castañas… ¡Se acerca el invierno y no he conseguido nada para llenar la despensa! Si no encuentro comida pronto,
        mis hijos y yo moriremos de hambre.

      </Text>

      <Text style={styles.text}>
      Al ratoncito se le quebró la voz y se puso a llorar desconsoladamente. 

      </Text>

      <Text style={styles.text}>
      – Eh, oye. No llores – le dijo el hada del invierno, a quien los lloriqueos la sacaban de sus casillas. – Encontrarás una solución. ¡Seguro que no es tan grave!
      </Text>
      
      <Text style={styles.text}>
      – ¿Que no es tan grave? No soy el único que tiene problemas desde que está desapareciendo el otoño. Ven conmigo, te lo mostraré.

      </Text>

      <Text style={styles.text}>
      Con desgana, el hada siguió al ratoncito hasta lo alto de un enorme árbol. Desde allí se veía gran parte del bosque. El ratón le iba señalando animales mientras le contaba cuáles eran sus problemas.

      </Text>

      <Text style={styles.text}>
      Le dijo que este año no había bayas rojas y que los insectos que se alimentaban de ellas habían perdido sus colores. También las plumas de los pájaros que se comían a esos insectos se habían vuelto pardas.
        Los ciervos estaban desconcertados por la falta de otoño y no encontraban pareja, así que en primavera no nacería ningún cervatillo. ¡Y lo más preocupante! No había ni usa sola seta. Sin los hongos, 
        las hojas muertas no se descompondrían para facilitar que germinaran nuevas plantas. El bosque se cubriría de un manto de podredumbre y se convertiría en un lugar hostil en el que ningún ser podría sobrevivir.

      </Text>

      <Text style={styles.text}>
      Tras escuchar todo aquello, el hada del invierno comprendió lo importante que era el otoño para todos los animales del bosque. Había sido una ignorante y una egoísta. 

      </Text>

      <Text style={styles.text}>
      Entonces, agarró fuertemente su varita mágica y uno tras otro, fue apuntando a los árboles del bosque. Tan pronto como los hilos de hielo estallaban, las hojas iban recuperando su aspecto otoñal.
        Una vez deshecho el encantamiento, el bosque lucía de nuevo como todos los otoños. Visto desde arriba, era un manto de colores verdes, rojos, naranjas y amarillos. El hada del invierno, al contemplarlo, quedó embelesada.
        Y entendió que el otoño no sólo era bueno para la vida. También lo era para el alma.

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

export default hinvierno;