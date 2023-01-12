$(document).ready(function() {
    for (let i = 0 ; i < users.length ; i++) {
        $('.profile-div').eq(i).children().eq(0).attr('src',`${users[i].avatar}`)
        $('.profile-div').eq(i).children().eq(1).children().eq(0).text(`${users[i].first_name} ${users[i].last_name}`)
        $('.profile-div').eq(i).children().eq(1).children().eq(1).text(`${users[i].first_name} ${users[i].last_name} is maktab 45 user by UID of ${users[i].id}, You can easily get in touch with ${users[i].first_name} form`)
        $('.profile-div').eq(i).children().eq(1).children().eq(2).text(`${users[i].email}`)
        $('.profile-div').eq(i).children().eq(1).children().eq(3).text(`UID: ${users[i].id}`)
        $('.profile-div').eq(i).children().eq(1).children().eq(4).text(`Email: ${users[i].email}`)
    }

    $('.about-us-button').click(function() {
        $('.container').children().eq(1).addClass('d-none')
        $('.container').children().eq(2).addClass('d-none')
        $('.about-us').addClass('d-block')
        $('.about-us').removeClass('d-none')
    })

    $('.btn1').click(function() {
        for (let i = 6 ; i < users.length ; i++) {
            $('.profile-div').eq(i).addClass("d-none")
            $('.profile-div').eq(i).removeClass(".d-block")
        }
        for (let i = 0 ; i < 6 ; i++) {
            $('.profile-div').eq(i).addClass("d-block")
            $('.profile-div').eq(i).removeClass("d-none")
        }
    })
    
    $('.btn2').click(function() {
        for (let i = 0 ; i < 6 ; i++) {
            $('.profile-div').eq(i).addClass("d-none")
            $('.profile-div').eq(i).removeClass("d-block")
        }
        for (let i = 6 ; i < users.length ; i++) {
            $('.profile-div').eq(i).removeClass("d-none")
            $('.profile-div').eq(i).addClass("d-block")
        }
    })

    $('.search-button').click(function() {
        let text = $('input').val()
        if ($('.about-us').attr('class').includes('d-block')) {
            $('.container').children().eq(1).removeClass('d-none')
            $('.container').children().eq(1).addClass('d-flex')
            $('.container').children().eq(2).removeClass('d-none')
            $('.container').children().eq(2).addClass('d-flex')
            $('.about-us').removeClass('d-block')
            $('.about-us').addClass('d-none')
        }

        for (let i = 0 ; i < users.length ; i++) {
            if ($('.profile-div').eq(i).text().includes(text)) {
                $('.profile-div').eq(i).addClass('d-block')
                $('.profile-div').eq(i).removeClass("d-none")
            } else {
                $('.profile-div').eq(i).addClass('d-none')
                $('.profile-div').eq(i).removeClass("d-block")
            }
        }
    })

    $('.profile-view').click(function() {
        $('.container').children().eq(1).addClass('d-none')
        $('.container').children().eq(2).addClass('d-none')
        $('.container').children().eq(3).addClass('d-none')
        $('.container').children().eq(4).removeClass('d-none')

        let userIndex = $(this).parent().parent().index()
        $('.person').children().eq(0).text(`${users[userIndex].first_name} profile`)
        $('.person').children().eq(1).attr('src',`${users[userIndex].avatar}`)
        $('.person').children().eq(2).text(`${users[userIndex].first_name} ${users[userIndex].last_name}`)
        $('.person').children().eq(3).text(`UID: ${users[userIndex].id}`)
        $('.person').children().eq(4).text(`Email: ${users[userIndex].email}`)
    })
})