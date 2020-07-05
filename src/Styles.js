export const getDiscStyle = (disc) => {
    return {
        display: 'inline-block',
        width: 50,
        height: 50,
        margin: 3,
        backgroundColor: getColor(disc),
        borderRadius: 25
    }
}

function getColor(disc) {
    if (disc == 0) {
        return '#E53935';
    } else if (disc == 1) {
        return '#1565C0'
    } else {
        return '#EDEDED';
    }
}

export const getContainerStyle = (rows, columns) => {
    return {
        width: 58 * columns.length,
        height: 61 * rows.length,
        backgroundColor: '#FFD600',
        borderRadius: 20,
        padding: 15,
        marginBottom: 20
    }
}

export const getResetButtonStyle = () => {
    return {
        height: 40,
        width: 100,
        borderRadius: 10,
        backgroundColor: '#00695C',
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20
    }
}

export const getGameOverBannerStyle = () => {
    return {
        position: 'relative',
        bottom: 450,
        backgroundColor: '#000000',
        paddingTop: 50,
        paddingBottom: 50,
        color: '#B00020',
        fontSize: 52
    }
}