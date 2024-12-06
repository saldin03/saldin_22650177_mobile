import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';

const App = () => {
    const [products, setProducts] = useState<{ name: string; price: number }[]>([]);
    const [isAdding, setIsAdding] = useState(false);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    // Fungsi untuk menambah produk
    const addProduct = () => {
        if (productName && productPrice) {
            setProducts([...products, { name: productName, price: parseInt(productPrice) }]);
            setProductName('');
            setProductPrice('');
            setIsAdding(false);
        }
    };

    // Fungsi untuk menghapus produk
    const deleteProduct = (index: number) => {
        const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
    };

    const totalPrice = products.reduce((total, product) => total + product.price, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Produk</Text>
            {!isAdding ? (
                <Button title="Tambah" onPress={() => setIsAdding(true)} />
            ) : (
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Nama"
                        value={productName}
                        onChangeText={setProductName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Harga"
                        value={productPrice}
                        keyboardType="numeric"
                        onChangeText={setProductPrice}
                    />
                    <Button title="Oke" onPress={addProduct} />
                </View>
            )}
            <FlatList
                data={products}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => deleteProduct(index)}>
                        <View style={styles.product}>
                            <Text>{item.name}</Text>
                            <Text>{item.price}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
            <Text style={styles.total}>Total: {totalPrice}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 10,
        borderRadius: 5,
    },
    product: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    total: {
        marginTop: 20,
        fontWeight: 'bold',
    },
});

export default App;
