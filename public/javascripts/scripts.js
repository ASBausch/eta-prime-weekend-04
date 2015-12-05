/**
 * Created by manadab on 12/5/15.
 */
$(function () {

// this is the submit function for the form
    $('.application').on('submit', function(event) {

        // stop the page from refreshing
        event.preventDefault();

        // gets the data from the form, based on element's "name" property
        var data = $(this).serializeArray();


        // finally, make an ajax call, using the POST method, and send the data
        $.ajax({url: '/applicant',
            type: 'post',
            data: data
        }).done(function(data) {
            console.log('i am here in script');
            console.log(data);

        });
console.log(data);
        // reset the form
        $(this)[0].reset();
    });

});